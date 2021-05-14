using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using backend.Models;
using System.Data;
using System.Data.SqlClient;
using Newtonsoft.Json;
using Microsoft.AspNetCore.Cors;
using System.IO;
using System.Net.Http.Headers;

namespace backend.Controllers
{
    [EnableCors("CorsApi")]
    public class HomeController : Controller
    {
        const string DB= "Data Source=DESKTOP-6CDPUQ1\\SQLEXPRESS;Initial Catalog=PYTHAGORAS;Integrated Security=True;trusted_connection=true";
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }

        //############### Return the number list from db #######################
        [HttpGet]
        [Route("getNumber")]
        public string getNumber(){
            
            SqlConnection con= new SqlConnection(DB);
            con.Open();            
            string cmdText="Select * from Number";
            SqlCommand cmd=new SqlCommand(cmdText,con);
            SqlDataReader dataReader= cmd.ExecuteReader();
            DataTable dataTable=new DataTable();
            dataTable.Load(dataReader);
            con.Close();
            return JsonConvert.SerializeObject(dataTable);
        }

        //########################## Return feedback list from db ##########################
        [HttpGet]
        [Route("getFeedBack")]
        public string getFeedBack(){
            SqlConnection con= new SqlConnection(DB);
            con.Open();            
            string cmdText="Select * from FeedBack";
            SqlCommand cmd=new SqlCommand(cmdText,con);
            SqlDataReader dataReader= cmd.ExecuteReader();
            DataTable dataTable=new DataTable();
            dataTable.Load(dataReader);
            con.Close();
            return JsonConvert.SerializeObject(dataTable);
        }
        
        //############################# Add number information to db ###############################
        [HttpPost]
        [Route("addNumber")]
        public string addNumber(string id, string content, string imgURL)
        {
            SqlConnection con = new SqlConnection(DB);
            con.Open();
            string check_exist = String.Format("Select count(*) from Number where number={0}", id);
            SqlCommand cmd = new SqlCommand(check_exist, con);
            int exist = (int)cmd.ExecuteScalar();
            int status;
            if (exist > 0)
            {
                string update = String.Format("update Number set infors=N'{0}',image='{1}' where number='{2}'", content, imgURL, id);
                cmd = new SqlCommand(update, con);
                status = cmd.ExecuteNonQuery();
            }
            else
            {
                string insert = String.Format("Insert into Number values ('{0}',N'{1}','{2}')", id, content, imgURL);
                cmd = new SqlCommand(insert, con);
                status = cmd.ExecuteNonQuery();
            }
            con.Close();
            if (status == 1)
                return "OK";
            else
                return "NOT OK";
        }
        
        //############################ Receive info form from calling api #################################
        [HttpPost]
        [Route("Upload")]
        public IActionResult Upload()
        {
            try
            {
                var file = Request.Form.Files[0];
                var folderName = Path.Combine("assets", "Resources");
                var pathToSave = Path.Combine("D:\\Quang_Pythagoras\\pythagoras-for-intern\\user-frontend\\src", folderName);

                if (file.Length > 0)
                {
                    var fileName = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');
                    var fullPath = Path.Combine(pathToSave, fileName+".png");
                    var dbPath = Path.Combine(folderName, fileName+".png");
                    var content=ContentDispositionHeaderValue.Parse(file.ContentDisposition).Name.Trim('"');
                    using (var stream = new FileStream(fullPath, FileMode.Create))
                    {
                        file.CopyTo(stream);
                    }
                    addNumber(fileName,content,dbPath);
                    return Ok(new { dbPath });
                }
                else
                {
                    return BadRequest();
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex}");
            }
        }

        //########################################## Return result to client ################################################
        public string calcNumb(string input){
            int numb=input.ToCharArray().Sum(c => c - '0');
            if(numb>11 && numb!=22){
                return calcNumb(numb.ToString());
            }
            else if(numb==22){
                return "22";
            }
            else
                return numb.ToString();
        }
        
        [HttpGet]
        [Route("getResult")]
        public string getResult(string date){
            date=date.Replace("-",string.Empty);
            string number=calcNumb(date);
            SqlConnection con= new SqlConnection(DB);
            con.Open();            
            string cmdText="Select * from Number where number="+number;
            SqlCommand cmd=new SqlCommand(cmdText,con);
            SqlDataReader dataReader= cmd.ExecuteReader();
            DataTable dataTable=new DataTable();
            dataTable.Load(dataReader);
            con.Close();
            return JsonConvert.SerializeObject(dataTable);
        }

        [HttpPost]
        [Route("addFeedBack")]
        public string addFeedback(string email, string fb){
            SqlConnection con = new SqlConnection(DB);
            con.Open();
            SqlCommand cmd=new SqlCommand();
            string insert = String.Format("Insert into FeedBack values (N'{0}','{1}')", fb.Replace("'",string.Empty),email);
            cmd = new SqlCommand(insert, con);
            int status = cmd.ExecuteNonQuery();
            con.Close();
            if (status == 1)
                return JsonConvert.SerializeObject("OK");
            else
                return JsonConvert.SerializeObject("NOT OK");
        }


        
    }
}

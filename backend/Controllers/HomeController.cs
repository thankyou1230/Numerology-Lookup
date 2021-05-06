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


namespace backend.Controllers
{
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

        [HttpGet]
        [Route("getNumber")]
        public string getNumber(){
            
            SqlConnection con= new SqlConnection(DB);
            con.Open();            
            string cmdText="Select * from Number";
            SqlCommand cmd=new SqlCommand(cmdText,con);
            SqlDataReader dataReader= cmd.ExecuteReader();
            con.Close();
            DataTable dataTable=new DataTable();
            dataTable.Load(dataReader);
            return JsonConvert.SerializeObject(dataTable);
        }
        
    }
}

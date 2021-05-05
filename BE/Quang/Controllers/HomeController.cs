using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Quang.Models;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using System.Data;
using System.Data.SqlClient;
using Newtonsoft.Json;
using Microsoft.AspNetCore.Cors;

namespace Quang.Controllers
{
    [EnableCors("CorsApi")]
    public class HomeController : Controller
    {
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
        [Route("getName")]
        public string getName()
        {
            string connectStr = "data source=DESKTOP-6CDPUQ1\\SQLEXPRESS;initial catalog=USER_;trusted_connection=true";
            SqlConnection con = new SqlConnection(connectStr);
            con.Open();
            string query = "SELECT user_name FROM user_";
            SqlCommand com = new SqlCommand(query, con);
            SqlDataReader read = com.ExecuteReader();
            DataTable dt = new DataTable();
            dt.Load(read);
            var username = new List<string>();
            for (int i = 0; i < dt.Rows.Count; i++)
            {
                username.Add(dt.Rows[i]["user_name"].ToString());
            }
            con.Close();
            return JsonConvert.SerializeObject(username);
        }
    }
}

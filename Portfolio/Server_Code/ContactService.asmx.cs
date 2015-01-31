using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Script.Services;
using System.Web.Services;

namespace Portfolio
{
    /// <summary>
    /// Summary description for ContactService
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    [System.Web.Script.Services.ScriptService]
    public class ContactService : System.Web.Services.WebService
    {

        [WebMethod]
        [ScriptMethod(UseHttpGet = false, ResponseFormat = ResponseFormat.Json)]
        public bool SaveContact(string emailId, string message)
        {
            try
            {
                StreamWriter writer = File.AppendText(Server.MapPath("~/App_Data/Contacts.txt"));
                writer.WriteLine("--------------------------------------------------------------------");
                writer.WriteLine("Date:\t" + DateTime.Now.ToString());
                writer.WriteLine("Email Id:\t" + emailId);
                writer.WriteLine("Message:\t" + message);
                writer.WriteLine("--------------------------------------------------------------------");
                writer.Flush();
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }
    }
}

using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.ServiceModel.Web;
using System.Text;

namespace ContactService
{
    public class ContactService : IContactService
    {
        public bool SaveContact(string emailId, string message)
        {
            try
            {
                if(!File.Exists(System.Web.Hosting.HostingEnvironment.MapPath("~/App_Data/Contacts.txt")))
                {
                    File.Create(System.Web.Hosting.HostingEnvironment.MapPath("~/App_Data/Contacts.txt")).Close();
                }

                StreamWriter writer = File.AppendText(System.Web.Hosting.HostingEnvironment.MapPath("~/App_Data/Contacts.txt"));
                writer.WriteLine("--------------------------------------------------------------------");
                writer.WriteLine("Date:\t" + DateTime.Now.ToString());
                writer.WriteLine("Email Id:\t" + emailId);
                writer.WriteLine("Message:\t" + message);
                writer.WriteLine("--------------------------------------------------------------------");
                writer.Flush();
                writer.Close();
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }
    }
}

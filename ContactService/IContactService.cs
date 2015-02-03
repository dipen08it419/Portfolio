using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.ServiceModel.Web;
using System.Text;

namespace ContactService
{
    [ServiceContract]
    public interface IContactService
    {

        [OperationContract]
        [WebInvoke(Method="GET", ResponseFormat=WebMessageFormat.Json, UriTemplate="Contact?emailId={emailId}&message={message}")]
        string SaveContact(string emailId, string message);
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Asm.AmCom.Web.Models
{
    public class ErrorModel
    {
        public int? HttpErrorCode { get; set; }
        public string HttpError { get; set; }
        public string Message { get; set; }
        public string Image { get; set; }
    }
}
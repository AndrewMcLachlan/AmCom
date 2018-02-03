using System;
using System.Collections.Generic;
using System.Linq;
using System.Resources;
using System.Text.RegularExpressions;
using System.Web;
using Asm.AmCom.Web.Models;
using Microsoft.AspNetCore.Diagnostics;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Asm.AmCom.Web.Controllers
{
    public class ErrorController : Controller
    {
        private static Regex ViewNotFoundMessage = new Regex("The view '.*' was not found.");

        public ActionResult Error(int? id, bool? isStatic)
        {
            var model = CreateErrorModel(id);
            string view = "Error";
            try
            {
                Response.StatusCode = model.HttpErrorCode ?? 500;
            }
            catch (Exception)
            {
                view = "StaticError";
            }

            if (Request.IsAjaxRequest()) return Content("");
            return View(view, model);
        }

        public ActionResult Static(int? id)
        {
            var model = CreateErrorModel(id);
            string view = "StaticError";

            Response.StatusCode = model.HttpErrorCode ?? 500;

            if (Request.IsAjaxRequest()) return Content("");
            return View(view, model);
        }

        public ErrorModel CreateErrorModel(int? id)
        {
            IExceptionHandlerFeature error = HttpContext.Features.Get<IExceptionHandlerFeature>();

            // Change view not found error to 404
            if (error != null && error.Error != null && error.Error is InvalidOperationException iox && ViewNotFoundMessage.IsMatch(iox.Message))
            {
                id = 404;
            }


            ErrorModel model = new ErrorModel { HttpErrorCode = id };

            if (id.HasValue)
            {
                try
                {
                    model.Message = GetFriendlyMessage(id.Value);
                    model.Image = id.Value == 500 ? "error" : "warning";

                    string status = GetStatusDescription(id.Value);

                    if (!String.IsNullOrEmpty(status))
                    {
                        model.HttpError = status;

                    }
                }
                catch (Exception)
                {
                    // Do nothing
                }
            }
            else
            {
                model.Message = Resources.Error.GenericFriendlyMessage;
            }

            return model;
        }

        private string GetFriendlyMessage(int id)
        {
            ResourceManager man = Resources.Error.ResourceManager;

            string result;

            try
            {
                result = man.GetString("Error" + id + "FriendlyMessage");
            }
            catch (MissingManifestResourceException)
            {
                result = Resources.Error.GenericFriendlyMessage;
            }

            return result;
        }

        private string GetStatusDescription(int id)
        {
            ResourceManager man = Resources.Error.ResourceManager;

            string result = String.Empty;

            try
            {
                result = man.GetString("Error" + id + "Description");
            }
            catch (MissingManifestResourceException)
            {
            }

            return result;
        }

    }
}

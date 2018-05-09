using System.Web.Http;
using System.Web.Http.Cors;

namespace ProjectManagerApi
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            var e = new EnableCorsAttribute("*", "*", "*");
            config.EnableCors(e);
            config.MapHttpAttributeRoutes();
            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }

            );
        }
    }
}

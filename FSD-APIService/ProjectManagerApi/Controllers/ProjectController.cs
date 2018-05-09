#region Assemblies
using BusinessEntities;
using BusinessLayer;
using System.Collections.Generic;
using System.Web.Http;
#endregion

namespace ProjectManagerApi.Controllers
{
    public class ProjectController : ApiController
    {
        /// <summary>
        /// Service call to isert or update projects
        /// </summary>
        /// <param name="oProj"></param>
        /// <returns></returns>
        [HttpPost]
        [Route("api/updateProject")]
        public ProjectUpdateResult Post(ProjectModel oProj)
        {
            return oProject.UpdateProject(oProj);
        }

        /// <summary>
        /// Service call to get all projects
        /// </summary>
        ProjectBusiness oProject = new ProjectBusiness();
        [HttpGet]
        [Route("api/getAllProjects")]
        public IEnumerable<ProjectModel> Get()
        {
            return oProject.GetAllProject();
        }

    }
}
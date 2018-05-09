#region Assemblies
using BusinessEntities;
using BusinessLayer;
using System.Collections.Generic;
using System.Web.Http;
#endregion

namespace ProjectManagerApi.Controllers
{
    public class TaskController : ApiController
    {

        TaskBusiness oTaskBusines = new TaskBusiness();

        /// <summary>
        /// Service call to get parent task
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [Route("api/getAllParentTasks")]
        public IHttpActionResult GetParentTasks()
        {
            return Ok(oTaskBusines.GetAllParentTasks());
        }

        /// <summary>
        /// Service call to get all task
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [Route("api/getAllTasks")]
        public IEnumerable<TaskModel> Get()
        {
            return oTaskBusines.GetAllTasks();
        }


        /// <summary>
        /// Service call to update task
        /// </summary>
        /// <param name="oTask"></param>
        /// <returns></returns>
        [HttpPost]
        [Route("api/updateTask")]
        public TaskUpdateResult Post(TaskModel oTask)
        {
            return oTaskBusines.UpdateTask(oTask);

        }

    }
}

#region Assemblies
using BusinessEntities;
using BusinessLayer;
using System.Collections.Generic;
using System.Web.Http;
#endregion

namespace ProjectManagerApi.Controllers
{
    public class UserController : ApiController
    {
        UserBusiness userBusines = new UserBusiness();
        
        /// <summary>
        /// Service call to get all users
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [Route("api/getAllUsers")]
        public IEnumerable<UserModel> Get()
        {
          return userBusines.GetAllUsers();
        }


        /// <summary>
        /// Service call to deletel user
        /// </summary>
        /// <param name="oUser"></param>
        /// <returns></returns>
        [HttpPost]
        [Route("api/deleteUser")]
        public Status DeleteUser(UserModel oUser)
        {
            return userBusines.DeleteUser(oUser);
        }

        /// <summary>
        /// Service call to update user
        /// </summary>
        /// <param name="oUser"></param>
        /// <returns></returns>
        [HttpPost]
        [Route("api/updateUser")]
        public UserUpdateResult UpdateUser(UserModel oUser)
        {
            return userBusines.UpdateUser(oUser);

        }
    }
}
#region Assemblies
using BusinessEntities;
using DataAccessLayer;
using System.Collections.Generic;
using System.Linq;
#endregion

namespace BusinessLayer
{
    public class UserBusiness
    {
        #region Assemblies
        UserRepository repoUser = new UserRepository();
        #endregion

        #region Public Methods

        /// <summary>
        /// To get all the users
        /// </summary>
        /// <returns></returns>
        public List<UserModel> GetAllUsers()
        {
            return repoUser.GetAllUsers().Select(x => new UserModel
            {
                Employee_ID = x.Employee_ID,
                First_Name = x.First_Name,
                Last_Name = x.Last_Name,
                Project_ID = x.Project_ID,
                User_ID = x.User_ID
            }).ToList();
        }

        /// <summary>
        /// To delete the user
        /// </summary>
        /// <param name="oUser"></param>
        /// <returns></returns>
        public Status DeleteUser(UserModel oUser)
        {
            repoUser.DeleteUser(new User()
            {
                User_ID = oUser.User_ID
            });
            return new Status() { Message = "user deleted successfully", Result = true };
        }

        /// <summary>
        /// To update the user
        /// </summary>
        /// <param name="oUser"></param>
        /// <returns></returns>
        public UserUpdateResult UpdateUser(UserModel oUser)
        {
            Status oStatus = new Status();
            User user = new User()
            {
                Employee_ID = oUser.Employee_ID,
                First_Name = oUser.First_Name,
                Last_Name = oUser.Last_Name,
                Project_ID = oUser.Project_ID
            };
            if (oUser.User_ID == 0)
            {
                user = repoUser.AddUser(user);
                oStatus = new Status() { Message = "User added successfully", Result = true };
            }
            else
            {
                user.User_ID = oUser.User_ID;
                user = repoUser.UpdateUser(user);
                oStatus = new Status() { Message = "User updated successfully", Result = true };
            }

            return new UserUpdateResult()
            {
                status = oStatus,
                user = new UserModel()
                {
                    User_ID = user.User_ID,
                    Project_ID = user.Project_ID,
                    Employee_ID = user.Employee_ID,
                    First_Name = user.First_Name,
                    Last_Name = user.Last_Name
                }
            };

        }

        #endregion

    }
}

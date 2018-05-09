
#region Assemblies
using BusinessEntities;
using DataAccessLayer;
using System.Collections.Generic;
using System.Linq;
#endregion

namespace BusinessLayer
{
    public class ProjectBusiness
    {
        #region Properties
        ProjectRepository repoProject = new ProjectRepository();
        #endregion

        #region Public Methods
        /// <summary>
        /// To get all projects
        /// </summary>
        /// <returns></returns>
        public List<ProjectModel> GetAllProject()
        {
            return repoProject.GetAllProject().Select(x => new ProjectModel
            {
                Project_ID = x.Project_ID,
                ProjectName = x.Project1,
                Priority = x.Priority,
                End_Date = x.End_Date,
                NumberOfTasks = x.Tasks.Count,
                Start_Date = x.Start_Date,
                Status = x.Status

            }).ToList();
        }

        /// <summary>
        /// To update the project details to db
        /// </summary>
        /// <param name="oProj"></param>
        /// <returns></returns>
        public ProjectUpdateResult UpdateProject(ProjectModel oProj)
        {
            Status oStatus = new Status();
            Project proj = new Project()
            {
                End_Date = oProj.End_Date,
                Priority = oProj.Priority,
                Project1 = oProj.ProjectName,
                Start_Date = oProj.Start_Date,
                Status = oProj.Status

            };
            if (oProj.Project_ID == 0)
            {
                proj = repoProject.AddProject(proj);
                oStatus = new Status() { Message = "Project added successfully", Result = true };
            }
            else
            {
                proj.Project_ID = oProj.Project_ID;
                proj = repoProject.UpdateProject(proj);
                oStatus = new Status() { Message = "Project updated successfully", Result = true };
            }
            if (oProj.Manager_ID != null)
            {
                UserRepository repoUser = new UserRepository();
                User ouser = repoUser.GetUserById(oProj.Manager_ID.Value);
                ouser.Project_ID = proj.Project_ID;
                repoUser.UpdateUser(ouser);
            }
            return new ProjectUpdateResult()
            {
                status = oStatus,
                project = new ProjectModel
                {
                    Project_ID = proj.Project_ID,
                    ProjectName = proj.Project1,
                    Priority = proj.Priority,
                    End_Date = proj.End_Date,
                    NumberOfTasks = proj.Tasks.Count,
                    Start_Date = proj.Start_Date,
                    Status = proj.Status
                }
            };

        }
        #endregion
    }
}

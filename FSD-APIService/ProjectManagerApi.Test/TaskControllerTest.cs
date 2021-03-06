﻿#region Assemblies
using BusinessEntities;
using Newtonsoft.Json;
using NUnit.Framework;
using ProjectManagerApi.Controllers;
using System.Collections;
using System.IO;
using System.Linq;
using System.Reflection;
#endregion


namespace ProjectManagerApi.Test
{
    public class TaskControllerTest
    {
        #region Private Variables
        private const string NEW_PROJECT_SUCCESS = "New Project added successfully";
        private const string NEW_TASK_SUCCESS = "New Task added successfully";
        private const string UPDATE_TASK_SUCCESS = "Existing Task updated successfully";
        private const string NEW_USER_SUCCESS = "New User added successfully";
        #endregion
        
        #region Public Method
        public static UserModel GetTestDataUser()
        {
            string FileLoc = @"TestData\UserData.json";
            string FilePath = Path.GetDirectoryName(Assembly.GetExecutingAssembly().CodeBase).Replace("file:\\", "").Replace("\\bin\\Debug", "");

            var jsonText = File.ReadAllText(Path.Combine(FilePath, FileLoc));
            var testUser = JsonConvert.DeserializeObject<UserModel>(jsonText);
            return testUser;

        }
        public static ProjectModel GetTestProject()
        {
            string FileLoc = @"TestData\ProjectData.json";
            string FilePath = Path.GetDirectoryName(Assembly.GetExecutingAssembly().CodeBase).Replace("file:\\", "").Replace("\\bin\\Debug", "");

            var jsonText = File.ReadAllText(Path.Combine(FilePath, FileLoc));
            var project = JsonConvert.DeserializeObject<ProjectModel>(jsonText);
            return project;
        }

        public static IEnumerable TestDataProject
        {
            get
            {
                string FileLoc = @"TestData\TaskData.json";
                string FilePath = Path.GetDirectoryName(Assembly.GetExecutingAssembly().CodeBase).Replace("file:\\", "").Replace("\\bin\\Debug", "");

                var jsonText = File.ReadAllText(Path.Combine(FilePath, FileLoc));
                var task = JsonConvert.DeserializeObject<TaskModel>(jsonText);
                yield return task;
            }
        }

        [Test, TestCaseSource("TestDataProject")]
        public void TestTask(TaskModel testTask)
        {
            string message = string.Empty;
            ProjectController projectController = new ProjectController();
            ProjectUpdateResult projectResult = new ProjectUpdateResult();
            UserUpdateResult userResult = AddEditUser();
            ProjectModel testProject = GetTestProject();
            TaskController taskc = new TaskController();
            TaskUpdateResult tresult = new TaskUpdateResult();

            testProject.Manager_ID = userResult.user.User_ID;
            testProject.Manager_Name = userResult.user.First_Name + userResult.user.Last_Name;
            projectResult = projectController.Post(testProject);
            message = projectResult.status.Message;
            Assert.AreEqual(NEW_PROJECT_SUCCESS, message);
            testTask.Project_ID = projectResult.project.Project_ID;
            testTask.Project_Name = projectResult.project.ProjectName;
            testTask.User_ID = userResult.user.User_ID;
            tresult = taskc.Post(testTask);
            Assert.AreEqual(NEW_TASK_SUCCESS, tresult.status.Message);
            TaskModel tasks = taskc.Get().Where(x=>x.TaskName == testTask.TaskName).FirstOrDefault();
            tresult = taskc.Post(tasks);
            Assert.AreEqual(UPDATE_TASK_SUCCESS, tresult.status.Message);            
        }
        public UserUpdateResult AddEditUser()
        {
            UserController oController = new UserController();
            UserUpdateResult uResult = new UserUpdateResult();
            uResult = oController.UpdateUser(GetTestDataUser());
            string message = uResult.status.Message;
            Assert.AreEqual(NEW_USER_SUCCESS, message);
            return uResult;
        }

        #endregion
    }
}

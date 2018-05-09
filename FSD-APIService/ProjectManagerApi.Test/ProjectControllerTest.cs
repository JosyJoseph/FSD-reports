#region Assemblies
using BusinessEntities;
using Newtonsoft.Json;
using NUnit.Framework;
using ProjectManagerApi.Controllers;
using System.Collections;
using System.IO;
using System.Reflection;
#endregion
namespace ProjectManagerApi.Test
{
    [TestFixture]
    public class ProjectControllerTest
    {
        #region Private Variables
        private const string NEW_USER_SUCCESS = "New User added successfully";
        private const string NEW_PROJECT_SUCCESS = "New Project added successfully";
        private const string EXISTING_PROJECT_SUCCESS = "Existing Project updated successfully";
        #endregion

        #region Public Methods
        public static UserModel GetUserTestData()
        {
            string FileLoc = @"TestData\UserData.json";
            string FilePath = Path.GetDirectoryName(Assembly.GetExecutingAssembly().CodeBase).Replace("file:\\", "").Replace("\\bin\\Debug", "");

            var jsonText = File.ReadAllText(Path.Combine(FilePath, FileLoc));
            var testUser = JsonConvert.DeserializeObject<UserModel>(jsonText);
            return testUser;

        }

        public static IEnumerable ProjectTestData
        {
            get
            {
                string fileLoc = @"TestData\ProjectData.json";
                string filePath = Path.GetDirectoryName(Assembly.GetExecutingAssembly().CodeBase).Replace("file:\\", "").Replace("\\bin\\Debug", "");

                var jsonText = File.ReadAllText(Path.Combine(filePath, fileLoc));
                var project = JsonConvert.DeserializeObject<ProjectModel>(jsonText);
                yield return project;
            }
        }

        [Test, TestCaseSource("ProjectTestData")]
        public void ProjectAddEditTest(ProjectModel testProject)
        {
            string message = string.Empty;
            ProjectController projectController = new ProjectController();
            ProjectUpdateResult projectResult = new ProjectUpdateResult();
            UserUpdateResult userResult = AddTestUser();
            testProject.Manager_ID = userResult.user.User_ID;
            testProject.Manager_Name = userResult.user.First_Name + userResult.user.Last_Name;
            projectResult = projectController.Post(testProject);
            message = projectResult.status.Message;
            Assert.AreEqual(NEW_PROJECT_SUCCESS, message);
            testProject.Project_ID = projectResult.project.Project_ID;
            Assert.AreEqual(EXISTING_PROJECT_SUCCESS, projectController.Post(testProject).status.Message);
            Assert.IsNotNull(projectController.Get());

        }

        public UserUpdateResult AddTestUser()
        {
            string message = string.Empty;
            UserController oController = new UserController();
            UserUpdateResult uResult = new UserUpdateResult();
            uResult = oController.UpdateUser(GetUserTestData());
            message = uResult.status.Message;
            Assert.AreEqual(NEW_USER_SUCCESS, message);
            return uResult;
        }
        #endregion
    }
}

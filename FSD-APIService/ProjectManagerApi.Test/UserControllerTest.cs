# region Assemblies
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
    public class UserControllerTest
    {
        #region Private Variables
        private const string NEW_USER_SUCCESS = "New user added successfully";
        private const string EXISTING_USER_SUCCESS = "Existing User updated successfully";
        #endregion

        #region Public Methods
        public static IEnumerable GetUserTestData
        {
            get
            {
                string FileLoc = @"TestData\UserData.json";
                string FilePath = Path.GetDirectoryName(Assembly.GetExecutingAssembly().CodeBase).Replace("file:\\", "").Replace("\\bin\\Debug", "");

                var jsonText = File.ReadAllText(Path.Combine(FilePath, FileLoc));
                var addUser = JsonConvert.DeserializeObject<UserModel>(jsonText);
                yield return addUser;
            }
        }

        [Test, TestCaseSource("GetUserTestData")]
        public void TestAddUser(UserModel testUser)
        {
            string message = string.Empty;
            UserController userController = new UserController();
            UserUpdateResult userResult = new UserUpdateResult();
            userResult = userController.UpdateUser(testUser);
            message = userResult.status.Message;
            Assert.AreEqual(NEW_USER_SUCCESS, message);
            testUser.User_ID = userResult.user.User_ID;
            Assert.AreEqual(EXISTING_USER_SUCCESS, userController.UpdateUser(testUser).status.Message);
            Assert.NotNull(userController.Get());
            Assert.IsTrue(userController.DeleteUser(testUser).Result);
        }
        #endregion

    }
}

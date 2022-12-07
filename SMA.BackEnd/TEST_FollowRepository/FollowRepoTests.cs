using Xunit;
using Moq;
using SMA.Data;

namespace TEST_FollowRepository;

public class FollowRepoTests
{
    [Fact]
    public void Test1()
    {
        // arange
        Mock<IFollowsRepository> mockRepo = new();
        string connectionString = "";
        List<int> userids = new List<int>(new int[] {1,2,3,4,5});
        mockRepo.Setup(x => x.GetEveryoneThisUserFollows(connectionString, 1)).Returns(new List<int>(new int[] {2,3,4,5}));
        var mrepo = new SMA.Data.FollowsRepository();

        // act
        List<int> Result = mrepo.GetEveryoneThisUserFollows(connectionString,1);

        // assert
        List<int> expected = new List<int>(new int[] {2,3,4,5});
        Assert.Equal(expected,Result);

        // What did this accomplish?
    }
}
namespace Titan.Models
{
    public interface IChatService
    {
        IEnumerable<Titan.Models.Root> GetAllMessages();
        IEnumerable<Titan.Models.Root> GetAllMessages(string question);
    }
}


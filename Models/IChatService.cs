namespace Titan.Models
{
    public interface IChatService
    {
        IEnumerable<Titan.Models.Root> GetAllMessages();
    }
}


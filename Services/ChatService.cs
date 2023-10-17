using Newtonsoft.Json;
using Titan.Models;
using Titan.Services;

namespace Titan.Services;

public class ChatService : IChatService
{
    public IHttpService HttpService { get; }
    private List<Titan.Models.Root> _messages = new List<Titan.Models.Root>();

    public ChatService(IHttpService httpService)
    {
        HttpService = httpService;
    }

    public IEnumerable<Titan.Models.Root> GetAllMessages()
    {
        var rawdata = HttpService.GetAsync("Tell me about the current Brent Crude oil market");
        Console.WriteLine(rawdata.Result);
        var data = JsonConvert.DeserializeObject<Titan.Models.Root>(rawdata.Result);
        //_messages.Append(data);
        _messages.Add(data);
        return _messages;
    }
}
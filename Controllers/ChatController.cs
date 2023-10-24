using Microsoft.AspNetCore.Mvc;
using Titan.Models;

namespace Titan.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ChatController : ControllerBase
    {
        private readonly IChatService _chatService;

        public ChatController(IChatService chatService)
        {
            _chatService = chatService;
        }

        [HttpGet]
        public IEnumerable<Root> Get()
        {
            var messages = _chatService.GetAllMessages();
            //Console.WriteLine("Return from Controller=> " + messages.ToList()[0].choices[0].text);

        // return Enumerable.Range(1, 1).Select(index => new ChatMessage
        // {
        //     Sender = DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
        //     TemperatureC = Random.Shared.Next(-20, 55),
        //     Summary = Summaries[Random.Shared.Next(Summaries.Length)]
        // })
        // .ToArray();

            return messages;
        }

        [HttpPost]
        public IEnumerable<Root> Post([FromBody] ChatMessage message)
        {
            var newMessage = message.Question; // _chatService.AddMessage(message);
            var messages = _chatService.GetAllMessages();
            return messages;
        }
    }
}

public class ChatRequestModel
{
    public string Question { get; set; }
}

    
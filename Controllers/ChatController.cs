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

    //     [HttpPost]
    //     public ActionResult<ChatMessage> Post(ChatMessage message)
    //     {
    //         var newMessage = "Test"; // _chatService.AddMessage(message);
    //         return Ok(newMessage);
    //     }
     }
}


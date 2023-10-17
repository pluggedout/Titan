using System.Net.Http;

namespace Titan.Services;
public class HttpService : IHttpService
{
    public static HttpClient client  { get; set; }  = new HttpClient();
    public HttpService()
    {}

    public async Task<string> GetAsync(string query)
    {
        var request = new HttpRequestMessage(HttpMethod.Post, "https://ai-demonorway.openai.azure.com/openai/deployments/turbotitan35/completions?api-version=2023-08-01-preview");
        request.Headers.Add("api-key", "00ec91ee39e649448baa43510ee8ba8d");
        //request.Headers.Add("Content-Type", "application/json");
        string queryString = "{\n    \"prompt\": \"" + query + "\",\n    \"max_tokens\": 250\n}";
        var content = new StringContent(queryString, null, "application/json");
request.Content = content;
        var response = await client.SendAsync(request);
        if (response.IsSuccessStatusCode)
        {
            return await response.Content.ReadAsStringAsync();
        }
        else
        {
            throw new Exception("Null response from Azure AI");
        }
    }

}

public interface IHttpService
{
    Task<string> GetAsync(string query);
}


//response.EnsureSuccessStatusCode();

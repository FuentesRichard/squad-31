using Day.Office.Api.Dtos;
using Newtonsoft.Json;
using RestSharp;
using System.Net;
using System.Threading.Tasks;

namespace Day.Office.Api.Clients.Implements
{
    public class GraphApi : IGraphApi
    {
        public async Task<GraphMeResponse> ObterInformacoesUsuario(string microsoftJwt)
        {
            var client = new RestClient("https://graph.microsoft.com/v1.0/me");            
            var request = new RestRequest(Method.GET);
            request.AddHeader("Authorization", $"Bearer {microsoftJwt}");
            var response = await client.ExecuteAsync<GraphMeResponse>(request);

            return response.Data;
        }
        public async Task<GraphCreateEventResponse> CriarEventoCalendarioMicrosoft(string microsoftJwt, CreateEventRequest requestBody)
        {
            var client = new RestClient("https://graph.microsoft.com/v1.0/me/events");            
            var request = new RestRequest(Method.POST);
            request.AddHeader("Authorization", $"Bearer {microsoftJwt}");
            request.AddHeader("Content-Type", "application/json");
            var body = JsonConvert.SerializeObject(requestBody);
            request.AddParameter("application/json", body, ParameterType.RequestBody);
            IRestResponse response = await client.ExecuteAsync(request);

            if (response.IsSuccessful)
            {
                var responseBody = JsonConvert.DeserializeObject<GraphCreateEventResponse>(response.Content);

                return responseBody;
            }

            return null;
        }

        public async Task<GraphEventsResponse> ObterEventos(string microsoftJwt)
        {
            var client = new RestClient("https://graph.microsoft.com/v1.0/me/events");
            var request = new RestRequest(Method.GET);
            request.AddHeader("Authorization", $"Bearer {microsoftJwt}");
            request.AddHeader("Content-Type", "application/json");            
            var response = await client.ExecuteAsync(request);

            if (response.StatusCode == HttpStatusCode.OK)
            {
                return JsonConvert.DeserializeObject<GraphEventsResponse>(response.Content);
            }
            return null;
        }

        public async Task DeletarEvento(string microsoftJwt, string externalId)
        {
            var client = new RestClient($"https://graph.microsoft.com/v1.0/me/events/{externalId}");
            var request = new RestRequest(Method.DELETE);
            request.AddHeader("Authorization", $"Bearer {microsoftJwt}");
            await client.ExecuteAsync(request);
        }
    }
}

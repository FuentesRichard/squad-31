using Day.Office.Api.Dtos;
using System.Threading.Tasks;

namespace Day.Office.Api.Clients
{
    public interface IGraphApi
    {
        Task<GraphMeResponse> ObterInformacoesUsuario(string microsoftJwt);
        Task<GraphCreateEventResponse> CriarEventoCalendarioMicrosoft(string microsoftJwt, CreateEventRequest request);
        Task<GraphEventsResponse> ObterEventos(string microsoftJwt);
        Task DeletarEvento(string microsoftJwt, string externalId);
    }
}

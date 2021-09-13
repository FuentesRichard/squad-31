using Day.Office.Api.Dtos;
using System.Threading.Tasks;

namespace Day.Office.Api.Clients
{
    public interface IGraphApi
    {
        Task<GraphMeResponse> ObterInformacoesUsuario(string microsoftJwt);
        Task CriarEventoCalendarioMicrosoft(string microsoftJwt, CreateEventRequest request);
    }
}

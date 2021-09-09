#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:5.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build
WORKDIR /src
COPY ["Day.Office.Api/Day.Office.Api.csproj", "Day.Office.Api/"]
RUN dotnet restore "Day.Office.Api/Day.Office.Api.csproj"
COPY . .
WORKDIR "/src/Day.Office.Api"
RUN dotnet build "Day.Office.Api.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Day.Office.Api.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Day.Office.Api.dll"]
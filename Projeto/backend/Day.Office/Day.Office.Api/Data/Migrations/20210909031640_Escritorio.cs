using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace Day.Office.Api.Data.Migrations
{
    public partial class Escritorio : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Escritorio",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Estado = table.Column<string>(type: "character varying(2)", maxLength: 2, nullable: false),
                    Cidade = table.Column<string>(type: "character varying(10)", maxLength: 10, nullable: false),
                    EstacoesDeTrabalho = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Escritorio", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "Escritorio",
                columns: new[] { "Id", "Cidade", "EstacoesDeTrabalho", "Estado" },
                values: new object[,]
                {
                    { 1, "São Paulo", 600, "SP" },
                    { 2, "Santos", 100, "SP" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Escritorio");
        }
    }
}

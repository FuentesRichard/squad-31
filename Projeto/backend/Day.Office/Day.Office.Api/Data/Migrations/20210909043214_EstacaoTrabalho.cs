using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace Day.Office.Api.Data.Migrations
{
    public partial class EstacaoTrabalho : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "EstacaoTrabalho",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Estacao = table.Column<int>(type: "integer", nullable: false),
                    IdEscritorio = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EstacaoTrabalho", x => x.Id);
                    table.ForeignKey(
                        name: "FK_EstacaoTrabalho_Escritorio_IdEscritorio",
                        column: x => x.IdEscritorio,
                        principalTable: "Escritorio",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_EstacaoTrabalho_IdEscritorio",
                table: "EstacaoTrabalho",
                column: "IdEscritorio");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "EstacaoTrabalho");
        }
    }
}

using Microsoft.EntityFrameworkCore.Migrations;

namespace Day.Office.Api.Data.Migrations
{
    public partial class ExternalIdAgendamento : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "ExternalId",
                table: "Agendamento",
                type: "text",
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ExternalId",
                table: "Agendamento");
        }
    }
}

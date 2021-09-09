using Microsoft.EntityFrameworkCore.Migrations;

namespace Day.Office.Api.Data.Migrations
{
    public partial class EstacaoTrabalhoSeed : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "EstacaoTrabalho",
                columns: new[] { "Id", "Estacao", "IdEscritorio" },
                values: new object[,]
                {
                    { 1, 1, 1 },
                    { 178, 355, 1 },
                    { 179, 357, 1 },
                    { 180, 359, 1 },
                    { 181, 361, 1 },
                    { 182, 363, 1 },
                    { 183, 365, 1 },
                    { 184, 367, 1 },
                    { 185, 369, 1 },
                    { 186, 371, 1 },
                    { 187, 373, 1 },
                    { 188, 375, 1 },
                    { 189, 377, 1 },
                    { 190, 379, 1 },
                    { 191, 381, 1 },
                    { 192, 383, 1 },
                    { 193, 385, 1 },
                    { 194, 387, 1 },
                    { 208, 415, 1 },
                    { 207, 413, 1 },
                    { 206, 411, 1 },
                    { 205, 409, 1 },
                    { 204, 407, 1 },
                    { 203, 405, 1 },
                    { 177, 353, 1 },
                    { 202, 403, 1 },
                    { 200, 399, 1 },
                    { 199, 397, 1 },
                    { 198, 395, 1 },
                    { 197, 393, 1 },
                    { 196, 391, 1 },
                    { 195, 389, 1 },
                    { 201, 401, 1 },
                    { 209, 417, 1 },
                    { 176, 351, 1 },
                    { 174, 347, 1 },
                    { 143, 285, 1 },
                    { 144, 287, 1 },
                    { 145, 289, 1 },
                    { 146, 291, 1 },
                    { 147, 293, 1 },
                    { 148, 295, 1 },
                    { 149, 297, 1 },
                    { 150, 299, 1 },
                    { 151, 301, 1 },
                    { 152, 303, 1 },
                    { 153, 305, 1 },
                    { 154, 307, 1 },
                    { 155, 309, 1 },
                    { 156, 311, 1 },
                    { 157, 313, 1 },
                    { 158, 315, 1 },
                    { 159, 317, 1 },
                    { 173, 345, 1 },
                    { 172, 343, 1 },
                    { 171, 341, 1 },
                    { 170, 339, 1 },
                    { 169, 337, 1 },
                    { 168, 335, 1 },
                    { 175, 349, 1 },
                    { 167, 333, 1 },
                    { 165, 329, 1 },
                    { 164, 327, 1 },
                    { 163, 325, 1 },
                    { 162, 323, 1 },
                    { 161, 321, 1 },
                    { 160, 319, 1 },
                    { 166, 331, 1 },
                    { 142, 283, 1 },
                    { 210, 419, 1 },
                    { 212, 423, 1 },
                    { 248, 15, 2 },
                    { 249, 17, 2 },
                    { 250, 19, 2 },
                    { 251, 21, 2 },
                    { 252, 23, 2 },
                    { 253, 25, 2 },
                    { 254, 27, 2 },
                    { 255, 29, 2 },
                    { 256, 31, 2 },
                    { 257, 33, 2 },
                    { 258, 35, 2 },
                    { 259, 37, 2 },
                    { 260, 39, 2 },
                    { 261, 41, 2 },
                    { 262, 43, 2 },
                    { 263, 45, 2 },
                    { 264, 47, 2 },
                    { 278, 75, 2 },
                    { 277, 73, 2 },
                    { 276, 71, 2 },
                    { 275, 69, 2 },
                    { 274, 67, 2 },
                    { 273, 65, 2 },
                    { 247, 13, 2 },
                    { 272, 63, 2 },
                    { 270, 59, 2 },
                    { 269, 57, 2 },
                    { 268, 55, 2 },
                    { 267, 53, 2 },
                    { 266, 51, 2 },
                    { 265, 49, 2 },
                    { 271, 61, 2 },
                    { 211, 421, 1 },
                    { 246, 11, 2 },
                    { 244, 7, 2 },
                    { 213, 425, 1 },
                    { 214, 427, 1 },
                    { 215, 429, 1 },
                    { 216, 431, 1 },
                    { 217, 433, 1 },
                    { 218, 435, 1 },
                    { 219, 437, 1 },
                    { 220, 439, 1 },
                    { 221, 441, 1 },
                    { 222, 443, 1 },
                    { 223, 445, 1 },
                    { 224, 447, 1 },
                    { 225, 449, 1 },
                    { 226, 451, 1 },
                    { 227, 453, 1 },
                    { 228, 455, 1 },
                    { 229, 457, 1 },
                    { 243, 5, 2 },
                    { 242, 3, 2 },
                    { 241, 1, 2 },
                    { 240, 479, 1 },
                    { 239, 477, 1 },
                    { 238, 475, 1 },
                    { 245, 9, 2 },
                    { 237, 473, 1 },
                    { 235, 469, 1 },
                    { 234, 467, 1 },
                    { 233, 465, 1 },
                    { 232, 463, 1 },
                    { 231, 461, 1 },
                    { 230, 459, 1 },
                    { 236, 471, 1 },
                    { 141, 281, 1 },
                    { 140, 279, 1 },
                    { 139, 277, 1 },
                    { 37, 73, 1 },
                    { 38, 75, 1 },
                    { 39, 77, 1 },
                    { 40, 79, 1 },
                    { 41, 81, 1 },
                    { 42, 83, 1 },
                    { 43, 85, 1 },
                    { 44, 87, 1 },
                    { 45, 89, 1 },
                    { 46, 91, 1 },
                    { 47, 93, 1 },
                    { 48, 95, 1 },
                    { 49, 97, 1 },
                    { 50, 99, 1 },
                    { 51, 101, 1 },
                    { 52, 103, 1 },
                    { 53, 105, 1 },
                    { 67, 133, 1 },
                    { 66, 131, 1 },
                    { 65, 129, 1 },
                    { 64, 127, 1 },
                    { 63, 125, 1 },
                    { 62, 123, 1 },
                    { 36, 71, 1 },
                    { 61, 121, 1 },
                    { 59, 117, 1 },
                    { 58, 115, 1 },
                    { 57, 113, 1 },
                    { 56, 111, 1 },
                    { 55, 109, 1 },
                    { 54, 107, 1 },
                    { 60, 119, 1 },
                    { 68, 135, 1 },
                    { 35, 69, 1 },
                    { 33, 65, 1 },
                    { 2, 3, 1 },
                    { 3, 5, 1 },
                    { 4, 7, 1 },
                    { 5, 9, 1 },
                    { 6, 11, 1 },
                    { 7, 13, 1 },
                    { 8, 15, 1 },
                    { 9, 17, 1 },
                    { 10, 19, 1 },
                    { 11, 21, 1 },
                    { 12, 23, 1 },
                    { 13, 25, 1 },
                    { 14, 27, 1 },
                    { 15, 29, 1 },
                    { 16, 31, 1 },
                    { 17, 33, 1 },
                    { 18, 35, 1 },
                    { 32, 63, 1 },
                    { 31, 61, 1 },
                    { 30, 59, 1 },
                    { 29, 57, 1 },
                    { 28, 55, 1 },
                    { 27, 53, 1 },
                    { 34, 67, 1 },
                    { 26, 51, 1 },
                    { 24, 47, 1 },
                    { 23, 45, 1 },
                    { 22, 43, 1 },
                    { 21, 41, 1 },
                    { 20, 39, 1 },
                    { 19, 37, 1 },
                    { 25, 49, 1 },
                    { 69, 137, 1 },
                    { 70, 139, 1 },
                    { 71, 141, 1 },
                    { 108, 215, 1 },
                    { 109, 217, 1 },
                    { 110, 219, 1 },
                    { 111, 221, 1 },
                    { 112, 223, 1 },
                    { 113, 225, 1 },
                    { 114, 227, 1 },
                    { 115, 229, 1 },
                    { 116, 231, 1 },
                    { 117, 233, 1 },
                    { 118, 235, 1 },
                    { 119, 237, 1 },
                    { 120, 239, 1 },
                    { 121, 241, 1 },
                    { 122, 243, 1 },
                    { 123, 245, 1 },
                    { 124, 247, 1 },
                    { 138, 275, 1 },
                    { 137, 273, 1 },
                    { 136, 271, 1 },
                    { 135, 269, 1 },
                    { 134, 267, 1 },
                    { 133, 265, 1 },
                    { 107, 213, 1 },
                    { 132, 263, 1 },
                    { 130, 259, 1 },
                    { 129, 257, 1 },
                    { 128, 255, 1 },
                    { 127, 253, 1 },
                    { 126, 251, 1 },
                    { 125, 249, 1 },
                    { 131, 261, 1 },
                    { 106, 211, 1 },
                    { 105, 209, 1 },
                    { 104, 207, 1 },
                    { 85, 169, 1 },
                    { 84, 167, 1 },
                    { 83, 165, 1 },
                    { 82, 163, 1 },
                    { 81, 161, 1 },
                    { 80, 159, 1 },
                    { 86, 171, 1 },
                    { 79, 157, 1 },
                    { 77, 153, 1 },
                    { 76, 151, 1 },
                    { 75, 149, 1 },
                    { 74, 147, 1 },
                    { 73, 145, 1 },
                    { 72, 143, 1 },
                    { 78, 155, 1 },
                    { 279, 77, 2 },
                    { 87, 173, 1 },
                    { 89, 177, 1 },
                    { 103, 205, 1 },
                    { 102, 203, 1 },
                    { 101, 201, 1 },
                    { 100, 199, 1 },
                    { 99, 197, 1 },
                    { 98, 195, 1 },
                    { 88, 175, 1 },
                    { 97, 193, 1 },
                    { 95, 189, 1 },
                    { 94, 187, 1 },
                    { 93, 185, 1 },
                    { 92, 183, 1 },
                    { 91, 181, 1 },
                    { 90, 179, 1 },
                    { 96, 191, 1 },
                    { 280, 79, 2 }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 5);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 6);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 7);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 8);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 9);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 10);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 11);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 12);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 13);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 14);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 15);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 16);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 17);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 18);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 19);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 20);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 21);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 22);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 23);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 24);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 25);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 26);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 27);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 28);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 29);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 30);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 31);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 32);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 33);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 34);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 35);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 36);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 37);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 38);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 39);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 40);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 41);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 42);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 43);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 44);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 45);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 46);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 47);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 48);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 49);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 50);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 51);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 52);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 53);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 54);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 55);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 56);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 57);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 58);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 59);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 60);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 61);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 62);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 63);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 64);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 65);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 66);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 67);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 68);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 69);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 70);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 71);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 72);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 73);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 74);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 75);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 76);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 77);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 78);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 79);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 80);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 81);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 82);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 83);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 84);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 85);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 86);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 87);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 88);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 89);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 90);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 91);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 92);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 93);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 94);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 95);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 96);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 97);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 98);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 99);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 100);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 101);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 102);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 103);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 104);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 105);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 106);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 107);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 108);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 109);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 110);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 111);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 112);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 113);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 114);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 115);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 116);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 117);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 118);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 119);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 120);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 121);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 122);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 123);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 124);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 125);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 126);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 127);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 128);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 129);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 130);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 131);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 132);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 133);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 134);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 135);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 136);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 137);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 138);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 139);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 140);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 141);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 142);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 143);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 144);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 145);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 146);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 147);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 148);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 149);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 150);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 151);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 152);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 153);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 154);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 155);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 156);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 157);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 158);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 159);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 160);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 161);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 162);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 163);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 164);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 165);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 166);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 167);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 168);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 169);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 170);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 171);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 172);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 173);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 174);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 175);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 176);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 177);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 178);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 179);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 180);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 181);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 182);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 183);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 184);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 185);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 186);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 187);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 188);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 189);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 190);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 191);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 192);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 193);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 194);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 195);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 196);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 197);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 198);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 199);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 200);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 201);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 202);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 203);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 204);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 205);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 206);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 207);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 208);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 209);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 210);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 211);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 212);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 213);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 214);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 215);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 216);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 217);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 218);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 219);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 220);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 221);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 222);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 223);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 224);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 225);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 226);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 227);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 228);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 229);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 230);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 231);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 232);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 233);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 234);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 235);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 236);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 237);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 238);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 239);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 240);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 241);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 242);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 243);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 244);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 245);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 246);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 247);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 248);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 249);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 250);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 251);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 252);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 253);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 254);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 255);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 256);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 257);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 258);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 259);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 260);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 261);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 262);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 263);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 264);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 265);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 266);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 267);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 268);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 269);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 270);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 271);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 272);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 273);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 274);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 275);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 276);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 277);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 278);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 279);

            migrationBuilder.DeleteData(
                table: "EstacaoTrabalho",
                keyColumn: "Id",
                keyValue: 280);
        }
    }
}

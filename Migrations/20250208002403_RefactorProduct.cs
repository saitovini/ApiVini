using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ApiVini.Migrations
{
    /// <inheritdoc />
    public partial class RefactorProduct : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Preco",
                table: "Products",
                newName: "Price");

            migrationBuilder.RenameColumn(
                name: "Nome",
                table: "Products",
                newName: "Name");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Price",
                table: "Products",
                newName: "Preco");

            migrationBuilder.RenameColumn(
                name: "Name",
                table: "Products",
                newName: "Nome");
        }
    }
}

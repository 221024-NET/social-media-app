using Microsoft.EntityFrameworkCore;
using SMA.BackendOps.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();

string connectionstring = @"C://connectionStrings/.socialmediaapp";

var connValue = File.ReadAllText(connectionstring);
builder.Services.AddDbContext<SMADbContext>(opts =>
    opts.UseSqlServer(connValue)
);


// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var smaAPI = "_smaAPI";

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: smaAPI, policy =>
    {
        policy.WithOrigins("http://localhost:4200").AllowAnyHeader().AllowAnyMethod();
    });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.UseCors(smaAPI);

app.Run();

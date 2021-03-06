import { Box, Button, Text, TextField, Image } from "@skynexui/components";
import appConfig from "../config.json";
import { useRouter } from "next/router";
import React from "react";

function Titulo(props) {
  const Tag = props.tag || "h1";
  return (
    <>
      <Tag>{props.children}</Tag>
      <style jsx>
        {`
          ${Tag} {
            color: ${appConfig.theme.colors.neutrals["000"]};
            font-size: 24px;
            font-weight: 600;
          }
        `}
      </style>
    </>
  );
}

// function HomePage() {
//   return (
//     <div>
//       <GlobalStyle />
//       <Titulo tag="h2">Welcome!</Titulo>
//       <h2> Discord - Alura Matrix</h2>
//     </div>
//   );
// }

// export default HomePage;

export default function PaginaInicial() {
  // const username = "fernandolar4";
  // VALOR QUE VEMOS \\ QUEM DEVEMOS ATUALIZAR PARA QUE A PÁGINA MOSTRE ESSE VALOR
  //SETUSERNAME = HOOK

  const [username, setUsername] = React.useState("GitHub");
  const roteamento = useRouter();

  return (
    <>
      <Box
        styleSheet={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: appConfig.theme.colors.primary[500],
          backgroundImage: "url(https://wallpaperaccess.com/full/640759.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundBlendMode: "multiply",
        }}
      >
        <Box
          styleSheet={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: {
              xs: "column",
              sm: "row",
            },
            width: "100%",
            maxWidth: "700px",
            borderRadius: "0px 50px 0px 50px",
            padding: "32px",
            margin: "16px",
            boxShadow: "0 2px 10px 0 rgb(0 0 0 / 20%)",
            backgroundColor: appConfig.theme.colors.neutrals[900],
          }}
        >
          {/* Formulário */}
          <Box
            as="form"
            onSubmit={function (infosDoEvento) {
              infosDoEvento.preventDefault();
              roteamento.push(`/chat?username=${username}`);
            }}
            styleSheet={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: { xs: "100%", sm: "50%" },
              textAlign: "center",
              marginBottom: "32px",
            }}
          >
            <Titulo tag="h2">Hello there!</Titulo>
            <Text
              variant="body3"
              styleSheet={{
                marginBottom: "32px",
                color: appConfig.theme.colors.neutrals[300],
              }}
            >
              {appConfig.name}
            </Text>

            {/* <input
              type="text"
              value={username}
              onChange={function (event) {
                console.log("usuário digitou", event.target.value);
                //Onde está o valor"?
                const valor = event.target.value;
                //trocar o valor da variável
                setUsername(valor);
              }}
            ></input>
            INPUT === TEXTFIELD
             */}

            <TextField
              type="text"
              value={username}
              onChange={function (event) {
                console.log("usuário digitou", event.target.value);
                //Onde está o valor"?
                const valor = event.target.value;
                //trocar o valor da variável através do react e avisa pra quem precisa
                setUsername(valor);
              }}
              fullWidth
              textFieldColors={{
                neutral: {
                  textColor: appConfig.theme.colors.neutrals[200],
                  mainColor: appConfig.theme.colors.neutrals[900],
                  mainColorHighlight: appConfig.theme.colors.primary[500],
                  backgroundColor: appConfig.theme.colors.neutrals[800],
                },
              }}
            />
            <Button
              type="submit"
              label="Entrar"
              fullWidth
              buttonColors={{
                contrastColor: appConfig.theme.colors.neutrals["000"],
                mainColor: appConfig.theme.colors.primary[500],
                mainColorLight: appConfig.theme.colors.primary[400],
                mainColorStrong: appConfig.theme.colors.primary[600],
              }}
            />
            <Text
              styleSheet={{
                display: "flex",
                color: appConfig.theme.colors.primary[500],
                alignItems: "center",
                justifyContent: "center",
                textDecoration: "none",
                marginTop: "32px",
              }}
            >
              Coded by:
              {
                <a href="https://www.linkedin.com/in/fernando-lara-701103119/">
                  Fernando Antonio Lara Maia
                </a>
              }
            </Text>
          </Box>
          {/* Formulário */}

          {/* Photo Area */}
          <Box
            styleSheet={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              maxWidth: "200px",
              padding: "16px",
              backgroundColor: appConfig.theme.colors.neutrals[800],
              border: "1px solid ",
              borderColor: appConfig.theme.colors.primary[800],
              borderRadius: "10px",
              flex: 1,
              minHeight: "240px",
            }}
          >
            <Image
              styleSheet={{
                borderRadius: "50%",
                marginBottom: "16px",
              }}
              src={`https://github.com/${username}.png`}
            />
            <Text
              variant="body4"
              styleSheet={{
                color: appConfig.theme.colors.neutrals[200],
                backgroundColor: appConfig.theme.colors.neutrals[900],
                padding: "3px 10px",
                borderRadius: "10%",
              }}
            >
              {username}
            </Text>
          </Box>
          {/* Photo Area */}
        </Box>
      </Box>
    </>
  );
}

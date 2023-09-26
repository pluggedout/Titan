FROM mcr.microsoft.com/dotnet/runtime:8.0-jammy AS build-env
SHELL ["/bin/bash", "-c"]

WORKDIR /source

COPY *.csproj ./

RUN apt-get update && apt-get install -y -q --no-install-recommends \
        dotnet-sdk-7.0 \
        apt-transport-https \
        build-essential \
        ca-certificates \
        curl \
        libssl-dev \
    && rm -rf /var/lib/apt/lists/*

ENV NVM_DIR /usr/local/nvm
ENV NODE_VERSION 16.20.2

RUN sysctl -w net.ipv6.conf.all.disable_ipv6=1 && sysctl -w net.ipv6.conf.default.disable_ipv6=1 && sysctl -w net.ipv6.conf.lo.disable_ipv6=1
# RUN rm /bin/sh && ln -s /bin/bash /bin/sh
RUN mkdir -p $NVM_DIR
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash \
    && . $NVM_DIR/nvm.sh \
    && nvm install $NODE_VERSION \
    && nvm alias default $NODE_VERSION \
    && nvm use default
    
RUN source ~/.bashrc
# RUN nvm install v16.20.2
RUN dotnet nuget locals --clear all
RUN dotnet restore  --verbosity minimal
COPY . ./
RUN dotnet add package Microsoft.CodeAnalysis.Analyzers
RUN dotnet build --no-restore
ENV PATH $NVM_DIR/versions/node/v$NODE_VERSION/bin:$PATH
RUN dotnet publish -c Release --no-restore -o /app

# Final stage / image
FROM mcr.microsoft.com/dotnet/runtime:8.0-jammy
WORKDIR /app
EXPOSE 3000
EXPOSE 5008
EXPOSE 49000
ENTRYPOINT [ "/source/bin/Release/net7.0/GUI2.dll" ]
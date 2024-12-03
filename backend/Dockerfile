FROM python:3.11
RUN apt-get update \
    && apt-get install -y libssl-dev \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*
WORKDIR /back-end
COPY requirements.txt ./
RUN pip3 install --no-cache-dir -r requirements.txt
COPY . ./
CMD ["/bin/bash"]

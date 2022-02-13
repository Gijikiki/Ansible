[Unit]
Description=Gitea (Git with a cup of tea)
After=syslog.target
After=network.target
After=mysql.service

[Service]
LimitMEMLOCK=infinity
LimitNOFILE=65535
RestartSec=2s
Type=simple
User={{ localuser }}
Group={{ localgroup }}
WorkingDirectory={{ localvar }}/
ExecStart={{ giteabin }} web -c {{ localetc }}/app.ini
Restart=always
Environment=USER=gitea HOME={{ localhome }} GITEA_WORK_DIR={{ localvar }}

[Install]
WantedBy=multi-user.target

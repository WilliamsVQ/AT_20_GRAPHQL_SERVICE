
$script = <<-SCRIPT
echo "I like Vagrant"
echo "I love Linux"
date > ~/vagrant_provisioned_at
SCRIPT

Vagrant.configure("2") do |config|
  config.ssh.insert_key = false
  #config.vm.box_download_insecure=true
  config.vm.box = "ubuntu/bionic64"
  config.vm.provider "virtualbox" do |vb|
    vb.memory = "2048"
  end

  config.vm.define "user-service" do |userService|
    userService.vm.network "private_network", ip:'192.168.56.70'
    userService.vm.network "forwarded_port", guest: 443, host: 4443
    userService.vm.hostname = "user-service"
    userService.vm.provision :docker
    userService.vm.provision :docker_compose
    userService.vm.provision :file, source: "AT_20_GRAPHQL_USER_SERVICE", destination: "AT_20_GRAPHQL_USER_SERVICE"
    #userService.vm.provision "shell", inline: "docker compose -f /home/vagrant/AT_20_GRAPHQL_USER_SERVICE/docker-compose.yaml up -d"
  end
end

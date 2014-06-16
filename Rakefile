task :deploy do
  system "rsync -avzP --exclude='.git' --exclude='Rakefile' ./ reaktivo.com:ccdradio.reaktivo.com"
end

task :server do
  system "php -S localhost:8001"
end
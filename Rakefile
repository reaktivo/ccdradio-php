task :deploy do
  system "rsync -avzP --exclude='.git' --exclude='Rakefile' ./ reaktivo.com:ccdradio.reaktivo.com"
end
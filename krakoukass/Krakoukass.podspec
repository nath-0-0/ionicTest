
  Pod::Spec.new do |s|
    s.name = 'Krakoukass'
    s.version = '0.0.1'
    s.summary = 'gyro'
    s.license = 'MIT'
    s.homepage = 'https://github.com/nath-0-0/krakoukass.git'
    s.author = 'nc'
    s.source = { :git => 'https://github.com/nath-0-0/krakoukass.git', :tag => s.version.to_s }
    s.source_files = 'ios/Plugin/**/*.{swift,h,m,c,cc,mm,cpp}'
    s.ios.deployment_target  = '11.0'
    s.dependency 'Capacitor'
  end
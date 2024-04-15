
export default class WebFontFile extends Phaser.Loader.File {


  constructor(loader, fontNames, service = 'google') {

    super(loader, {
      type: 'webfont',
      key: fontNames.toString()
    })

    this.fontNames = Array.isArray(fontNames) ? fontNames : [fontNames]

    this.service = service

  }

  load() {
    const config = {
      active: () => {
        this.loader.nextFile(this, true);
      },
      // custom: {
      //   families: ['My Font', 'My Other Font:n4,i4,n7'],
      //   urls: ['/fonts.css']
      // }      
      
    }

    switch (this.service) {


      case 'google':
        config['google'] = {
          families: this.fontNames
        }
        break
      default:
        throw new Error('unsupported font family');
    }

    WebFont.load(config);
  }
}


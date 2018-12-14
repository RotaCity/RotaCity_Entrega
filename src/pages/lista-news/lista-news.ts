import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ServicosProvider } from '../../providers/servicos/servicos';
import { FormBuilder, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-lista-news',
  templateUrl: 'lista-news.html',
})
export class ListaNewsPage {

  public title_news:string = "Ipojuca mais uma vez nas semi-finais";

  users: any[];
  cadastro: any = {};
  nomes: boolean = true;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public servicos: ServicosProvider /*,
    public alertCtrl: AlertController,
    public formBuilder: FormBuilder*/
    ) {

      this.buscarDados();
      
      /*
      this.cadastro = this.formBuilder.group({
        nome: ['', Validators.required],
        email: ['', Validators.required],
        senha: ['', Validators.required]
      });*/

  }

  buscarDados() {
    //retornar dados do banco
    this.servicos.listarDados()
    .subscribe(
      data=> this.users = data,
      err=> console.log(err)
    );
  }


  /*
  postDados() {
    this.servicos.cadastrar(this.cadastro.value)
          .subscribe(
                  data=>{
                    console.log(data.mensage);
                          this.buscarDados();
                  },
                  err=>console.log(err)
          );
  }

  deletarMensagem(user) {
    this.servicos.excluir(user.id)
          .subscribe(
                  data=>{
                    console.log(data.mensage);
                          this.buscarDados();
                  },
                  err=>console.log(err)
          );
  }

  editarMensagem(req) {
    let prompt = this.alertCtrl.create({
      title: 'Editar Perfil',
      inputs: [
        {
          name: 'nome',
          placeholder: 'nome',
          value:req.nome
        },
        {
          name: 'email',
          placeholder: 'email',
          value:req.email
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {}
        },
        {
          text: 'Salvar',
          handler: data => {
            let params: any = {
              id: req.id,
              nome: data.nome,
              email: data.email
            }
            console.log(data);
            this.servicos.editar(params)
            .subscribe (
              data=> {
                console.log(data.mensage);
                this.buscarDados();
              },
              err=> console.log(err)
            );
          }
        }
      ]
    });
    prompt.present();
  }

  mostrarMensagem() {
    this.nomes = !this.nomes;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaNewsPage');
  }*/

}

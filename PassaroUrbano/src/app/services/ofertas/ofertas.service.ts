import { Injectable } from '@angular/core';
import { Oferta } from 'src/app/shared/oferta.model';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OfertasService {
  private urlApi = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

  // Utilizando Promisses
  public GetOfertas(): Promise<Array<Oferta>> {
    // Requisição para API e retornando um Json
    // Para fins didaticos vamos transformar o Observable em Promisses
    return this.http
      .get(`${this.urlApi}ofertas?destaque=true`)
      .toPromise()
      .then((reposta: any) => reposta);
  }

  public GetOfertasPorCategoria(categoria: string): Promise<Oferta[]> {
    return this.http
      .get(`${this.urlApi}ofertas?categoria=${categoria}`)
      .toPromise()
      .then((resposta: any) => resposta);
  }
  // Se utilizarmos o shift ele vai retirar o primeiro objeto do array
  public GetOfertaPorId(id: number): Promise<Oferta> {
    return this.http
      .get(`${this.urlApi}ofertas?id=${id}`)
      .toPromise()
      .then((resposta: any) => resposta.shift());
  }

  public GetComoUsarOfertaPorId(id: number): Promise<string> {
    return this.http
      .get(`${this.urlApi}como-usar?id=${id}`)
      .toPromise()
      .then((resposta: any) => {
        console.log(resposta[0].descricao);
        return resposta[0].descricao;
      });
  }

  public getOndeFicaOfertaPorId(id: number): Promise<string> {
    return this.http
      .get(`${this.urlApi}onde-fica?id=${id}`)
      .toPromise()
      .then((resposta: any) => {
        console.log(resposta[0].descricao);
        return resposta[0].descricao;
      });
  }
  // Recupera um observable do GET da API
  public PesquisaOfertas(termo: string): Observable<Oferta[]> {
    // O _like vai buscar o termo parecido com o que foi digitado
      return this.http.get<Oferta[]>(`${this.urlApi}ofertas?descricao_oferta_like=${termo}`)
      // O Map é um operador que transforma um objeto mais complexo do get para um mais simples
      .pipe(
        // Caso ocorra algum erro vai chamar novamente durante 10 vezes as requisições
        retry(10),
        map((resposta: any) => {
        return resposta;
      }));
  }

  // Com objetos Mock
  // public ofertas: Array<Oferta> = [
  //   {
  //     id: 1,
  //     categoria: 'restaurante',
  //     titulo: 'Super Burger',
  //     descricao_oferta: 'Rodízio de Mini-hambúrger com opção de entrada.',
  //     anunciante: 'Original Burger',
  //     valor: 29.9,
  //     destaque: true,
  //     imagens: [
  //       { url: '/assets/ofertas/1/img1.jpg' },
  //       { url: '/assets/ofertas/1/img2.jpg' },
  //       { url: '/assets/ofertas/1/img3.jpg' },
  //       { url: '/assets/ofertas/1/img4.jpg' }
  //     ]
  //   },
  //   {
  //     id: 2,
  //     categoria: 'restaurante',
  //     titulo: 'Cozinha Mexicana',
  //     descricao_oferta: 'Almoço ou Jantar com Rodízio Mexicano delicioso.',
  //     anunciante: 'Mexicana',
  //     valor: 32.9,
  //     destaque: true,
  //     imagens: [
  //       { url: '/assets/ofertas/2/img1.jpg' },
  //       { url: '/assets/ofertas/2/img2.jpg' },
  //       { url: '/assets/ofertas/2/img3.jpg' },
  //       { url: '/assets/ofertas/2/img4.jpg' }
  //     ]
  //   },
  //   {
  //     id: 4,
  //     categoria: 'diversao',
  //     titulo: 'Estância das águas',
  //     descricao_oferta:
  //       'Diversão garantida com piscinas, trilhas e muito mais.',
  //     anunciante: 'Estância das águas',
  //     valor: 31.9,
  //     destaque: true,
  //     imagens: [
  //       { url: '/assets/ofertas/3/img1.jpg' },
  //       { url: '/assets/ofertas/3/img2.jpg' },
  //       { url: '/assets/ofertas/3/img3.jpg' },
  //       { url: '/assets/ofertas/3/img4.jpg' },
  //       { url: '/assets/ofertas/3/img5.jpg' },
  //       { url: '/assets/ofertas/3/img6.jpg' }
  //     ]
  //   }
  // ];

  // public GetOfertas(): Array<Oferta> {
  //   return this.ofertas;
  // }

  // public GetOfertasPromisse(): Promise<Array<Oferta>> {
  //   return new Promise((resolve, reject) => {
  //     // Algum tipo de processamento que ao final chama a função resolve ou reject
  //     let deuCerto = true;
  //     if (deuCerto) {
  //       // Utilizando o setTimeout para testarmos a funcao assincrona
  //       // () => resolve(this.ofertas) - Uma função que emcapsula e a resposta dela é o resolve e não a resolve
  //       setTimeout(() => resolve(this.ofertas), 3000);
  //     } else {
  //     reject({codigo_erro: 404, mensagem_erro: 'Não foi encontrado'});
  //   }
  //   })
  //   // Quando a função der o resolve, estamos fazendo uma tratativa de dados antes de
  //   // enviar para quem chamou a GetOfertasPromisse()
  //   // No caso dos then eles são todos sincronos, então podemos colocar mais promisses dento dos then
  //   .then((ofertas: Oferta[]) => {
  //     // Qualquer processamento necessário
  //     console.log('Then dentro da função getOfertas');
  //     return ofertas;
  //   }).then((ofertas: Oferta[]) => {
  //     // Alguma segunda tratativa dos dados
  //     console.log('Podemos castatear then');
  //     return new Promise((resolve2, reject2) => {
  //       setTimeout(() => { resolve2(ofertas); }, 3000);
  //     })
  //     .then((ofertas: Oferta[]) =>{
  //       console.log('Terceiro then executado apos 3 segundos pois estava aguardando uma promisse ser resolvida');
  //       return ofertas;
  //     });
  //   });
  // }
}

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Enterprise } from '../models/enterprise.model';

@Injectable({
  providedIn: 'root',
})
export class EnterpriseService {
  private enterprises: Enterprise[] = [
    //Zaya Brava
    {
      id: 'zaya-brava',
      nome: 'Zaya Brava',
      descricao: 'O Zaya Brava By Construttore',
      endereco: 'Praia Brava - Itajaí',
      enderecoTotal: '',
      googleMapsLink: '',
      fachada: '../assets/img/enterprises/zaya-brava/zaya.jpg',
      banner: '../assets/img/enterprises/zaya-brava/zaya.jpg',
      sobre: [
        'Zaya carrega algo como “a ilusão”, “a fantasia”, ou “a que tem a força criativa”. Portanto, o nome Zaya está associado à diversas simbologias, que vão desde elementos da natureza até características de uma pessoa iluminada, positiva e com o dote da criatividade.',
      ],
      diferenciais: '',
      oEmpreendimento: [''],
      oApartamento: [''],
      aObra: [''],
      imagensObra: [''],
      status: 'PRÉ-LANÇAMENTO',
      imagens: [
        '../assets/img/enterprises/brava-view/launch-01.webp',
        '../assets/img/enterprises/brava-view/launch-02.webp',
        './assets/img/enterprises/brava-view/launch-03.webp',
      ],
      plantas: [],
      mapa: '',
    },
    //Brava Dreams
    {
      id: 'brava-dreams',
      nome: 'Brava Dreams',
      descricao: 'O Brava Dreams',
      endereco: 'Praia Brava - Itajaí, SC',
      fachada: '../assets/img/enterprises/brava-dreams/fachada-04.jpg',
      banner: '../assets/img/enterprises/brava-dreams/zaya.jpg',
      enderecoTotal:
        'Av. Carlos Drummond de Andrade, 33 - Santa Clara, Itajaí - SC, 88306-830',
      googleMapsLink: 'https://goo.gl/maps/yCphrxnNjeyXhQvLA',
      sobre: [
        'Um empreendimento para sonhar e viver. Esse é o Brava Dreams, o novo lançamento da Construttore Empreendimentos que chega para elevar o conceito de moradia frente mar e alto padrão na Praia Brava em Itajaí.',
        'Apartamentos com área privativa de até 361 m², piscina exclusiva por unidade e vista panorâmica, unem-se à excelente localização, formando a combinação perfeita entre exclusividade, você e a Praia Brava.',
      ],
      diferenciais:
        'Arquitetura inspirada em Dubai com fachada tecnológica, estilo moderno, conforto e design. Torre única com exclusivos apartamentos e vista incomparável para o mar. Localização privilegiada – na beira mar da Brava Sul, altíssimo padrão de acabamento.',
      oEmpreendimento: [
        'Apartamentos com plantas diferenciadas, sendo alguns duplex',
        'Espaço Festas e Gourmet',
        'Piscina aquecida',
        'Terraço Lounge',
        'Fitness',
        'Solarium',
        'Ponto de abastecimento elétrico para carros',
      ],
      oApartamento: [
        '3 ou 4 suítes',
        'Vista panorâmica para o mar',
        'Fechadura biométrica',
        'Sacada com Churrasqueira a Carvão',
        'Piscina aquecida em cada apartamento',
        'Living integrado com cozinha',
        'Lavabo',
        'Área de Serviço',
        'Sacada técnica',
        'Banheiros com piso aquecido e ponto para toalheiro elétrico',
        'Revestimento cerâmico nas paredes dos banheiros e áreas de serviço',
        'Rebaixamento de gesso em todos os ambientes',
        'Isolamento térmico e acústico',
        'Infraestrutura para ar condicionado VRF com cassetes 1 via',
        'Infraestrutura para aspiração central',
        'Infraestrutura para automação de iluminação, áudio e vídeo, climatização, cortineiros e piscina',
        'Infraestrutura para aquecedor e anel de recirculação de água quente',
        'Medidor de água individual',
      ],
      aObra: [
        { nome: 'Projeto e Planejamento', porcentagem: '100' },
        { nome: 'Fundação', porcentagem: '100' },
        { nome: 'Estruturas', porcentagem: '70' },
        { nome: 'Paredes', porcentagem: '30' },
        { nome: 'Acabamentos', porcentagem: '0' },
        { nome: 'Instalações', porcentagem: '0' },
      ],
      imagensObra: [''],
      status: 'LANÇAMENTO',
      imagens: [
        '../assets/img/enterprises/brava-dreams/fachada-01.jpg',
        '../assets/img/enterprises/brava-dreams/fachada-02.jpg',
        '../assets/img/enterprises/brava-dreams/fachada-03.jpg',
        '../assets/img/enterprises/brava-dreams/fachada-04.jpg',
        '../assets/img/enterprises/brava-dreams/living.jpg',
        '../assets/img/enterprises/brava-dreams/piscina.jpg',
        '../assets/img/enterprises/brava-dreams/piscina-02.jpg',
      ],
      plantas: [],
      mapa: '',
    },
    //Brava View
    {
      id: 'brava-view',
      nome: 'Brava View',
      descricao: 'Descrição do empreendimento 1',
      endereco: 'Endereço do empreendimento 1',
      enderecoTotal: '',
      googleMapsLink: '',
      fachada: '../assets/img/enterprises/brava-view/brava-view.jpg',
      banner: '../assets/img/enterprises/zaya-brava/zaya.jpg',
      sobre: [''],
      diferenciais: '',
      oEmpreendimento: [''],
      oApartamento: [''],
      aObra: [''],
      imagensObra: [''],
      status: 'ENTREGUE : 2021',
      imagens: [
        '../assets/img/enterprises/brava-view/launch-01.webp',
        '../assets/img/enterprises/brava-view/launch-02.webp',
        './assets/img/enterprises/brava-view/launch-03.webp',
      ],
      plantas: [],
      mapa: '',
    },
    //Solares da Brava
    {
      id: 'solares-da-brava',
      nome: 'Solares da Brava',
      descricao: 'Descrição do empreendimento 2',
      endereco: 'Endereço do empreendimento 2',
      enderecoTotal: '',
      googleMapsLink: '',
      fachada: '../assets/img/enterprises/solares/solares.jpg',
      banner: '../assets/img/enterprises/zaya-brava/zaya.jpg',
      sobre: [''],
      diferenciais: '',
      oEmpreendimento: [''],
      oApartamento: [''],
      aObra: [''],
      imagensObra: [''],
      status: 'ENTREGUE : 2021',
      imagens: [
        '../assets/img/enterprises/brava-view/launch-01.webp',
        '../assets/img/enterprises/brava-view/launch-02.webp',
        './assets/img/enterprises/brava-view/launch-03.webp',
      ],
      plantas: [],
      mapa: '',
    },
    //Privilège Brava
    {
      id: 'privilege-brava',
      nome: 'Privilège Brava',
      descricao: 'Descrição do empreendimento 2',
      endereco: 'Endereço do empreendimento 2',
      enderecoTotal: '',
      googleMapsLink: '',
      fachada: '../assets/img/enterprises/privilege/privilege.jpg',
      banner: '../assets/img/enterprises/zaya-brava/zaya.jpg',
      sobre: [''],
      diferenciais: '',
      oEmpreendimento: [''],
      oApartamento: [''],
      aObra: [''],
      imagensObra: [''],
      status: 'ENTREGUE : 2021',
      imagens: [
        '../assets/img/enterprises/brava-view/launch-01.webp',
        '../assets/img/enterprises/brava-view/launch-02.webp',
        './assets/img/enterprises/brava-view/launch-03.webp',
      ],
      plantas: [],
      mapa: '',
    },
  ];

  constructor() {}

  getEnterprises(): Observable<Enterprise[]> {
    return of(this.enterprises);
  }

  getEnterpriseById(id: string): Observable<Enterprise | undefined> {
    const enterprise = this.enterprises.find((e) => e.id === id);
    return of(enterprise);
  }
}

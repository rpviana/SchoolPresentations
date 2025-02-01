import React from 'react';
import { Brain, Lightbulb, Award, BookOpen, Quote, GraduationCap, MapPin, Users, Calendar, Briefcase, Music, Heart, Globe, School, Building, User } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Secção Principal */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-6 py-16">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Albert Einstein</h1>
              <p className="text-xl mb-6">Físico Teórico e Prémio Nobel</p>
              <p className="text-lg opacity-90">Revolucionou a nossa compreensão do espaço, tempo e universo</p>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://e7.pngegg.com/pngimages/746/475/png-clipart-albert-einstein-grayscale-albert-einstein-spacetime-theory-of-relativity-general-relativity-physicist-einstein-people-monochrome-thumbnail.png"
                alt="Retrato de Einstein"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Ficha Biográfica Melhorada */}
      <section className="py-16 container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Ficha Biográfica</h2>
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Informações Pessoais */}
          <div className="bg-white p-8 rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-[1.02]">
            <div className="flex items-center mb-6">
              <User className="w-8 h-8 text-blue-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-800">Informações Pessoais</h3>
            </div>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-lg mr-4">
                  <User className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700">Nome Completo</h4>
                  <p className="text-gray-600">Albert Einstein</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-green-100 p-2 rounded-lg mr-4">
                  <Calendar className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700">Nascimento</h4>
                  <p className="text-gray-600">14 de março de 1879</p>
                  <p className="text-gray-600">Ulm, Alemanha</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-purple-100 p-2 rounded-lg mr-4">
                  <School className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700">Formação Académica</h4>
                  <p className="text-gray-600">Instituto Federal de Tecnologia de Zurique</p>
                  <p className="text-gray-600">Doutoramento - Universidade de Zurique</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-red-100 p-2 rounded-lg mr-4">
                  <Briefcase className="w-5 h-5 text-red-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700">Ocupação</h4>
                  <p className="text-gray-600">Físico Teórico e Professor Universitário</p>
                </div>
              </div>
            </div>
          </div>

          {/* Características e Contexto */}
          <div className="bg-white p-8 rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-[1.02]">
            <div className="flex items-center mb-6">
              <Brain className="w-8 h-8 text-indigo-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-800">Características e Contexto</h3>
            </div>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-indigo-100 p-2 rounded-lg mr-4">
                  <User className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700">Elementos Identificativos</h4>
                  <ul className="text-gray-600 list-disc list-inside">
                    <li>Cabelo característico e desalinhado</li>
                    <li>Personalidade excêntrica e criativa</li>
                    <li>Pacifista convicto</li>
                    <li>Violinista amador</li>
                  </ul>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-yellow-100 p-2 rounded-lg mr-4">
                  <Globe className="w-5 h-5 text-yellow-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700">Contexto Histórico</h4>
                  <ul className="text-gray-600 list-disc list-inside">
                    <li>Primeira Guerra Mundial (1914-1918)</li>
                    <li>Ascensão do Nazismo na Alemanha</li>
                    <li>Segunda Guerra Mundial (1939-1945)</li>
                    <li>Início da Era Nuclear</li>
                  </ul>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-teal-100 p-2 rounded-lg mr-4">
                  <Users className="w-5 h-5 text-teal-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700">Comunidades</h4>
                  <ul className="text-gray-600 list-disc list-inside">
                    <li>Comunidade científica internacional</li>
                    <li>Comunidade judaica</li>
                    <li>Academia Prussiana de Ciências</li>
                    <li>Instituto de Estudos Avançados de Princeton</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Secção de Conquistas */}
      <section className="py-16 container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Principais Contribuições</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Lightbulb className="w-12 h-12 text-yellow-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">Teoria da Relatividade</h3>
            <p className="text-gray-600">Alterou fundamentalmente a nossa compreensão do espaço, tempo, gravidade e universo.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Brain className="w-12 h-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">Teoria Quântica</h3>
            <p className="text-gray-600">Contribuiu para o desenvolvimento da teoria quântica através do efeito fotoelétrico.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Award className="w-12 h-12 text-red-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">Prémio Nobel</h3>
            <p className="text-gray-600">Galardoado com o Prémio Nobel da Física de 1921 pelos seus contributos para a física teórica.</p>
          </div>
        </div>
      </section>

      {/* Secção de Publicações */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Publicações Principais</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <BookOpen className="w-8 h-8 text-indigo-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Teoria da Relatividade Restrita (1905)</h3>
              <p className="text-gray-600">Introduziu a famosa equação E = mc² e revolucionou a nossa compreensão do espaço e do tempo.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <BookOpen className="w-8 h-8 text-indigo-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Teoria da Relatividade Geral (1915)</h3>
              <p className="text-gray-600">Apresentou uma nova teoria da gravitação que superou as leis de Newton e previu as ondas gravitacionais.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Secção do Legado */}
      <section className="py-16 container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Legado</h2>
        <div className="bg-white p-8 rounded-lg shadow-md">
          <Quote className="w-12 h-12 text-gray-400 mb-6" />
          <p className="text-xl text-gray-700 mb-6">
            O trabalho de Einstein continua a influenciar a física moderna, desde a mecânica quântica até à exploração espacial. As suas teorias têm sido repetidamente confirmadas através de observações experimentais.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">300+</div>
              <div className="text-gray-600">Artigos Científicos</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">1921</div>
              <div className="text-gray-600">Ano do Prémio Nobel</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">∞</div>
              <div className="text-gray-600">Impacto Duradouro</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
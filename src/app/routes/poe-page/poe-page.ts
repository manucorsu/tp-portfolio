import { Component } from '@angular/core';
import { SmIcosContainer } from '../../components/sm-icos-container/sm-icos-container';
import { SocialMediaIcon } from '../../types/social-media';
import { PProject, PProjectData } from '../../components/pproject/pproject';

@Component({
  selector: 'poe-page',
  templateUrl: './poe-page.html',
  styleUrl: './poe-page.css',
  imports: [SmIcosContainer, PProject],
})
export class PoePage {
  protected readonly smIcons: SocialMediaIcon[] = [
    {
      sm: 'instagramP',
      href: 'https://www.instagram.com/palermo_poema',
    },
    {
      sm: 'mailP',
      href: 'mailto:palermopoema@gmail.com',
    },
    {
      sm: 'githubP',
      href: 'https://github.com/PoemaPalermo',
    },
    {
      sm: 'linkedinP',
      href: 'https://ar.linkedin.com/in/lucia-poema-palermo-a34aa6336',
    },
  ];

  protected readonly projects: PProjectData[] = [
    {
      time: '2023',
      name: 'Strong Eye',
      subtitle: 'Proyecto escolar — no completado',
      description:
        'Aplicación conceptual destinada a facilitar juegos diseñados para el entrenamiento del ojo perezoso, enfocada en accesibilidad visual y claridad de uso. Participé como diseñadora, elaborando la estructura de pantallas, los flujos principales y la identidad visual general del proyecto.',
      tech: ['Figma'],
    },
    {
      time: '2024',
      name: 'Bitcoin Clicker',
      subtitle: 'Proyecto escolar — no completado',
      description:
        'Videojuego incremental centrado en la obtención de monedas mediante clics y producción automática, incorporando eventos aleatorios y sistema de logros. Fui la programadora principal, además de colaborar en el diseño visual y coordinar la gestión general del proyecto.',
      tech: ['GitHub', 'Unity', 'C#'],
    },
    {
      time: '2024',
      name: 'Forget Me Not',
      subtitle: 'Proyecto ganador de concurso internacional YEP',
      description:
        'Aplicación conceptual orientada al acompañamiento de personas mayores que requieren monitoreo remoto, facilitando la continuidad de sus actividades cotidianas. Participé como diseñadora, desarrollando la estructura de navegación, la propuesta visual y la experiencia general de uso.',
      tech: ['Figma'],
    },
    {
      time: '2025',
      name: 'Impulsar+',
      subtitle: 'Proyecto escolar — no completado',
      description:
        'Aplicación pensada para acompañar a personas del espectro autista en la organización de sus emprendimientos, ofreciendo herramientas para la gestión de materiales, finanzas, calendario, productos y contactos. Trabajé como diseñadora y project manager, definiendo la estructura, los flujos y la experiencia de uso.',
      tech: ['Figma'],
    },
    {
      time: '2024-Actualidad',
      name: 'Serpentiante',
      subtitle: 'Proyecto perosnal en desarrollo',
      description:
        'Reinterpretación del clásico Snake desarrollada con fines exploratorios, centrada en la manipulación del tiempo de juego según la dificultad y en la integración del manejo de archivos .json. Proyecto completamente autogestionado, tanto en diseño como en programación',
      tech: ['GitHub', 'Unity', 'C#', 'JavaScript'],
    },
    {
      time: 'Próximamente',
      name: 'Dungeons and Adventures',
      description:
        'Videojuego narrativo estilo elige tu propia aventura, basado en decisiones ramificadas, inventario, nivel, estadísticas dinámicas y múltiples finales posibles. Actuaré como programadora y project manager, coordinando todas las etapas del desarrollo. Proyecto realizado junto a mi familia.',
      tech: ['GitHub', 'Unity', 'C#', 'JavaScript'],
    },
    {
      time: 'Próximamente',
      name: 'Easy Bibl',
      description:
        'Extensión de navegador destinada a generar citas en múltiples formatos y estilos, creada como respuesta a la falta de herramientas gratuitas, completas y accesibles. Proyecto íntegramente autogestionado, desde la investigación hasta la implementación.',
      tech: ['GitHub', 'VS Code', 'HTML', 'CSS', 'JavaScript'],
    },
  ];

  scrollTo(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

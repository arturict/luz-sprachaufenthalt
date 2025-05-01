import { Translation } from '../types';

export const translations: Record<string, Translation> = {
  fr: {
    title: 'Merci Luz',
    intro: 'Un message de gratitude depuis la Suisse',
    message: 'Chère Luz, votre accueil chaleureux au cœur de Montpellier, si proche du centre et de l\'école, restera gravé dans nos mémoires. Même quand Yannick luttait avec son français, vos gestes patients et votre compréhension ont créé un pont entre nous. Et ce moment où vous aviez besoin d\'aide pour respirer, nous rappelle que parfois les plus beaux liens se créent dans les moments inattendus.',
    moments: [
      {
        title: 'Le moment Angelina',
        description: 'Ce moment spontané où vous avez filmé Angelina, lui demandant de dire "J\'aime Mathias" en suisse-allemand. Un mélange parfait de nos cultures!'
      },
      {
        title: 'La plage sereine',
        description: 'Cette journée à la plage était si paisible, bien loin des "dangers" que vous nous aviez décrits. Un moment de pure détente sous le soleil méditerranéen.'
      },
      {
        title: 'Le fameux "Sur?"',
        description: 'Votre façon si caractéristique de dire "Sur?" avec tous ces gestes typiquement français. Cette expression est devenue notre préférée!'
      }
    ],
    fromArtur: 'Luz, votre générosité et votre aide, notamment pendant ce moment difficile où vous aviez du mal à respirer, m\'ont profondément touché. Vous avez cette capacité rare de faire sentir les gens chez eux, même à des milliers de kilomètres de leur maison.',
    fromYannick: 'Malgré mon français approximatif, vous avez toujours eu la patience de m\'écouter et de m\'aider à m\'exprimer. Vos gestes et votre bienveillance ont rendu la communication possible et chaleureuse. Merci pour cette patience infinie.',
    accessibility: {
      increaseText: 'Agrandir le texte',
      decreaseText: 'Réduire le texte',
      readText: 'Lire le texte',
      languageSwitch: 'Deutsch'
    }
  },
  de: {
    title: 'Danke Luz',
    intro: 'Eine Dankesbotschaft aus der Schweiz',
    message: 'Liebe Luz, dein herzlicher Empfang im Herzen von Montpellier, so nah am Zentrum und der Schule, wird uns immer in Erinnerung bleiben. Selbst als Yannick mit seinem Französisch kämpfte, haben deine geduldigen Gesten und dein Verständnis eine Brücke zwischen uns gebaut. Und dieser Moment, als du Hilfe beim Atmen brauchtest, erinnert uns daran, dass manchmal die schönsten Verbindungen in unerwarteten Momenten entstehen.',
    moments: [
      {
        title: 'Der Angelina-Moment',
        description: 'Dieser spontane Moment, als du Angelina filmtest und sie "Ich liebe Mathias" auf Schweizerdeutsch sagen sollte. Eine perfekte Mischung unserer Kulturen!'
      },
      {
        title: 'Der friedliche Strand',
        description: 'Dieser Tag am Strand war so friedlich, ganz anders als die "Gefahren", die du uns beschrieben hattest. Ein Moment reiner Entspannung unter der mediterranen Sonne.'
      },
      {
        title: 'Das berühmte "Sur?"',
        description: 'Deine charakteristische Art, "Sur?" zu sagen, mit all den typisch französischen Gesten. Dieser Ausdruck ist zu unserem Lieblingsausdruck geworden!'
      }
    ],
    fromArtur: 'Luz, deine Großzügigkeit und deine Hilfe, besonders in diesem schwierigen Moment, als du Probleme mit dem Atmen hattest, haben mich tief berührt. Du hast diese seltene Fähigkeit, Menschen sich zu Hause fühlen zu lassen, auch wenn sie tausende Kilometer von zu Hause entfernt sind.',
    fromYannick: 'Trotz meines holprigen Französisch hattest du immer die Geduld, mir zuzuhören und mir beim Ausdrücken zu helfen. Deine Gesten und deine Freundlichkeit haben die Kommunikation möglich und herzlich gemacht. Danke für diese unendliche Geduld.',
    accessibility: {
      increaseText: 'Text vergrößern',
      decreaseText: 'Text verkleinern',
      readText: 'Text vorlesen',
      languageSwitch: 'Français'
    }
  }
};
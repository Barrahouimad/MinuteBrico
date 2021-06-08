import { Link } from "react-router-dom";
import "./singlePost.css";
import importImg from '../images/img-10.jpg';



export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src={importImg} alt='import'></img><br/>
        
        <h1 className="singlePostTitle">
          Comment peindre un mur sans laisser de traces
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span>
            Auteur:
            <b className="singlePostAuthor">
                Chaimae
            </b>
          </span>
          <span>Il y a un jour</span>
        </div>
        <p className="singlePostDesc">
        On dit que la peinture est à portée de tous, mais on n’explique pas toujours comment peindre un mur sans laisser de trace. Des gouttes qui sèchent au sol, des traces de pinceau qui lézardent la peinture… voilà qui risque de gâcher vos efforts. Pas de panique, Bricoco vous fournit toutes les astuces pour vous en sortir comme un pro !

Peindre un mur sans laisser de traces
On dit que la peinture est à portée de tous, mais on n’explique pas toujours comment peindre un mur sans laisser de trace. Des gouttes qui sèchent au sol, des traces de pinceau qui lézardent la peinture… voilà qui risque de gâcher vos efforts. Pas de panique, Bricoco vous fournit toutes les astuces pour vous en sortir comme un pro !!
          <br />
          <br />
          Etape 1 : appliquer la sous-couche La sous-couche ou primaire d’accroche rend la surface moins poreuse. La peinture va donc adhérer plus facilement, sans risque de gaspillage. L’application s’effectue selon les recommandations du fabricant. Lisez-les soigneusement et passez à l’attaque.
Etape 2 : appliquer la première couche Servez-vous d’une brosse à rechampir pour peindre les angles en débordant un peu vers le centre du mur. Utilisez ce même outil pour peindre autour des fenêtres et autres “obstacles”.  A l’aide d’un rouleau, étirez la peinture de haut en bas, sur une surface moyenne de 1 m². Effectuez des mouvements francs en prenant soin d’égoutter les outils dans le bac pour éviter que la couche ne soit trop épaisse. Repassez votre rouleau horizontalement. Les applications croisées effacent les traces laissées par les outils. Passez au mètre carré suivant et reprenez la même technique. Une application verticale, suivie d’un passage à l’horizontal.  Il n’est pas nécessaire de remettre systématiquement de la peinture. Il suffit d’effectuer des gestes amples, sans trop appuyer. Le résultat sera impeccable. Laissez sécher cette première couche. Il faut environ 5 heures mais par prudence, référez-vous aux conseils du fabricant. Etape 3 : appliquer la seconde couche Munissez-vous d’un papier verre à grain fin et poncez délicatement la première couche. Procédez zone par zone pour bien éliminer les excédents de peinture et assurer la parfaite adhérence de la dernière couche. Essuyez vos murs avec un chiffon microfibre ou, mieux encore, passez l’aspirateur pour éliminer les résidus de poussière. Versez la peinture dans un grand seau puis homogénéisez à l’aide d’un bâton. Procédez comme pour la première couche, en commençant par les coins et les zones difficiles. Après avoir trempé le rouleau, la brosse ou le pinceau, prenez soin de bien l’essorer. Etirez horizontalement, toujours avec des mouvements amples, afin de bien lisser la peinture. N’effectuez pas de passages croisés. Comptez environ 24 heures pour le séchage complet. 
          <br />
          <br />
          C’est simple : multipliez la largeur d’un mur par sa hauteur faites de même pour les fenêtres, portes, escaliers, cheminée… Additionnez ensuite les dimensions de tous les murs, soustrayez les fenêtres et autres surfaces qui ne seront pas peintes. Le rendement est mentionné sur les pots de peinture. Concrètement, cette donnée vous indique combien de mètres carrés vous pouvez peindre avec 1 litre. Prévoyez une marge de 15% par rapport au rendement indiqué, juste au cas où. 

Deux couches valent mieux qu’une. Ajustez donc votre achat en conséquence. 

Astuces : privilégiez les grands pots car les prix ont tendance à baisser à mesure que la quantité augmente. C’est sans oublier le fait que les contenus de pots différents ne sont pas forcément identiques même si la référence est la même.
        
        </p>
      </div>
    </div>
  );
}

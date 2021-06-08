import { Link } from "react-router-dom";
import "./singlePost.css";
import importImg from '../../images/img-15.jpeg';



export default function SinglePost5() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src={importImg} alt='import'></img><br/>
        
        <h1 className="singlePostTitle">
        Le matériel de bricolage indispensable dans chaque maison
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
          <span>15 Février 2021</span>
        </div>
        <p className="singlePostDesc">
        Comme pour tous vos travaux, le choix des outils est une étape cruciale. Pour retourner la terre de votre sol, un vaste panel d’options s’offre à vous. La fourche-bêche est bien sûr l’un des outils les plus utilisés pour travailler le sol. Pratique, elle rentre facilement dans le sol et permet de le retourner sans l’abimer. Le louchet est utilisé pour un travail en profondeur afin de retourner la terre sur une grande surface. Pratique, on peut cependant lui reprocher de ne permettre qu’un travail grossier qui risque d’abimer les matières organiques bénéfiques du sol. Le louchet favorise également l’apparition de nuisibles en remontant larves et vers à la surface. Ne faites pas l’impasse sur la griffe, qui vous aidera à briser les mottes ; c’est un véritable indispensable unique en son genre. Enfin, la plupart des jardiniers à la fibre écolo préfèrent des outils comme la fourche à bêcher ou la Grelinette, qui permettent un travail du sol dans le respect de la vie sous-terraine. Ces outils sont parfaits pour aérer la terre sans excès tout en préservant la richesse sédimentaire.          <br />
          <br />
          Appliquer la sous-couche La sous-couche ou primaire d’accroche rend la surface moins poreuse. La peinture va donc adhérer plus facilement, sans risque de gaspillage. L’application s’effectue selon les recommandations du fabricant. Lisez-les soigneusement et passez à l’attaque.
Etape 2 : appliquer la première couche Servez-vous d’une brosse à rechampir pour peindre les angles en débordant un peu vers le centre du mur. Utilisez ce même outil pour peindre autour des fenêtres et autres “obstacles”.  A l’aide d’un rouleau, étirez la peinture de haut en bas, sur une surface moyenne de 1 m². Effectuez des mouvements francs en prenant soin d’égoutter les outils dans le bac pour éviter que la couche ne soit trop épaisse. Repassez votre rouleau horizontalement. Les applications croisées effacent les traces laissées par les outils. Passez au mètre carré suivant et reprenez la même technique. Une application verticale, suivie d’un passage à l’horizontal.  Il n’est pas nécessaire de remettre systématiquement de la peinture. Il suffit d’effectuer des gestes amples, sans trop appuyer. Le résultat sera impeccable. Laissez sécher cette première couche. Il faut environ 5 heures mais par prudence, référez-vous aux conseils du fabricant. Etape 3 : appliquer la seconde couche Munissez-vous d’un papier verre à grain fin et poncez délicatement la première couche. Procédez zone par zone pour bien éliminer les excédents de peinture et assurer la parfaite adhérence de la dernière couche. Essuyez vos murs avec un chiffon microfibre ou, mieux encore, passez l’aspirateur pour éliminer les résidus de poussière. Versez la peinture dans un grand seau puis homogénéisez à l’aide d’un bâton. Procédez comme pour la première couche, en commençant par les coins et les zones difficiles. Après avoir trempé le rouleau, la brosse ou le pinceau, prenez soin de bien l’essorer. Etirez horizontalement, toujours avec des mouvements amples, afin de bien lisser la peinture. N’effectuez pas de passages croisés. Comptez environ 24 heures pour le séchage complet. 
          
        </p>
      </div>
    </div>
  );
}

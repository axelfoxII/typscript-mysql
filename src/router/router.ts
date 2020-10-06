import { Router, Request, Response } from 'express';

import MySQL from '../mysql/mysql';


const router = Router();

router.get('/productos', (req: Request, res: Response) => {

  const query = `SELECT * FROM heroes`;

  MySQL.ejecutarQuery(query, (err: any, productos: Object[]) => {

    if (err) {

      res.status(400).json({

        ok: false,
        error: err
      });

    } else {

      res.json({

        ok: true,
        productos: productos


      })

    }
 

  });


});


router.get('/productos/:id', (req: Request, res: Response) => {


  const id = req.params.id;
  const escapedId= MySQL.instance.cnn.escape(id);
  const query = `SELECT * FROM producto WHERE id=${escapedId}`;

  MySQL.ejecutarQuery(query, (err: any, producto: Object[]) => {

    if (err) {

      res.status(400).json({

        ok: false,
        error: err
      });

    } else {

      res.json({

        ok: true,
        producto: producto


      })

    }


  });

});

export default router;

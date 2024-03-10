import { useEffect, useState } from 'react';
import {PageGeneral} from '../ui/page-general'
import {useGetServersQuery} from "@hypolia/domains/servers";
import { Transmit } from '@adonisjs/transmit-client'
import { ServerEntity } from '@hypolia/contracts';

export function PageGeneralFeature(){
  const { data, isLoading } = useGetServersQuery()
  const [servers, setServers] = useState<ServerEntity[]>([])
  useEffect(() => {

    const transmit = new Transmit({
      baseUrl: 'http://localhost:3333',
      beforeSubscribe(request) {
        //request.headers!.set('Authorization', `Bearer ${accessToken}`)    
      },
    })

    const sub = transmit.listenOn('servers', (data) => {
      console.log("message received");
      
      
     
      //setServers(data)


      //setServers(JSON.parse(data))
    })

    sub()

    return () => {

      transmit.close()
    }
  }, [])
  return (
    <PageGeneral
      servers={servers}
    />
  )
}

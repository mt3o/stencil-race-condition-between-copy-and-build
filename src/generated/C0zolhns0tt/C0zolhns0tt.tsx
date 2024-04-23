
  import { Component, Prop, h } from '@stencil/core';

  @Component({
  tag: 'c-0zolhns0tt',
  shadow: true,
})
export class C0zolhns0tt {
    @Prop() first: string;
    @Prop() second: string;
    private foo(): string {
      return 'aaa'+this.first+this.second;
    }
    render(){
        return <div>{ this.foo() } </div>;
    }
}
  